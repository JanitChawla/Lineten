terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.23.0"
    }
  }
}

provider "aws" {
  region = var.region
}

data "aws_vpc" "vpc" {
  id = var.vpc
}

data "aws_subnets" "subnet" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.vpc.id]
  }
  tags = {
    Tier = "public"
  }
}

data "aws_iam_role" "role" {
  name = var.iamrole
}

data "aws_iam_role" "noderole" {
  name = var.noderole
}

data "aws_eks_addon_version" "vpc_cni" {
  addon_name         = "vpc-cni"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "kube_proxy" {
  addon_name         = "kube-proxy"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "coredns" {
  addon_name         = "coredns"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "pod_identity_agent" {
  addon_name         = "eks-pod-identity-agent"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "cloudwatch_observability" {
  addon_name         = "amazon-cloudwatch-observability"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "node_monitoring_agent" {
  addon_name         = "eks-node-monitoring-agent"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "metrics_server" {
  addon_name         = "metrics-server"
  kubernetes_version = "1.34"
  most_recent        = true
}

data "aws_eks_addon_version" "external_dns" {
  addon_name         = "external-dns"
  kubernetes_version = "1.34"
  most_recent        = true
}


resource "aws_eks_cluster" "terraform_cluster" {
  name = "lineten-assign"

  access_config {
    authentication_mode = "API"
  }

  role_arn = data.aws_iam_role.role.arn
  version  = "1.34"

  vpc_config {
    endpoint_private_access = true
    endpoint_public_access  = true
    subnet_ids              = data.aws_subnets.subnet.ids
  }
  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler"
  ]
  upgrade_policy {
    support_type = "EXTENDED"
  }

}



resource "aws_eks_addon" "vpc_cni" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "vpc-cni"
  addon_version               = data.aws_eks_addon_version.vpc_cni.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "kube_proxy" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "kube-proxy"
  addon_version               = data.aws_eks_addon_version.kube_proxy.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "coredns" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "coredns"
  depends_on                  = [aws_eks_node_group.cpu-node]
  addon_version               = data.aws_eks_addon_version.coredns.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "pod_identity_agent" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "eks-pod-identity-agent"
  addon_version               = data.aws_eks_addon_version.pod_identity_agent.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "cloudwatch_observability" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "amazon-cloudwatch-observability"
  addon_version               = data.aws_eks_addon_version.cloudwatch_observability.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "node_monitoring_agent" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "eks-node-monitoring-agent"
  addon_version               = data.aws_eks_addon_version.node_monitoring_agent.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "metrics_server" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "metrics-server"
  addon_version               = data.aws_eks_addon_version.metrics_server.version
  resolve_conflicts_on_update = "PRESERVE"
}

resource "aws_eks_addon" "external_dns" {
  cluster_name                = aws_eks_cluster.terraform_cluster.name
  addon_name                  = "external-dns"
  addon_version               = data.aws_eks_addon_version.external_dns.version
  resolve_conflicts_on_update = "PRESERVE"
}



resource "aws_eks_node_group" "cpu-node" {
  cluster_name    = aws_eks_cluster.terraform_cluster.name
  node_group_name = "cpu-node"
  node_role_arn   = data.aws_iam_role.noderole.arn
  subnet_ids      = data.aws_subnets.subnet.ids

  ami_type       = "AL2023_x86_64_STANDARD"
  capacity_type  = "ON_DEMAND"
  instance_types = ["t2.medium"]
  disk_size      = 50

  scaling_config {
    desired_size = 1
    max_size     = 2
    min_size     = 1
  }

  update_config {
    max_unavailable = 1
  }

}
