output "cluster_name" {
  description = "EKS cluster name"
  value       = aws_eks_cluster.terraform_cluster.name
}

output "cluster_endpoint" {
  description = "EKS cluster endpoint - needed for Karpenter and ALB controller Helm installs"
  value       = aws_eks_cluster.terraform_cluster.endpoint
}

output "cluster_ca" {
  description = "EKS cluster certificate authority - needed for kubeconfig and Helm"
  value       = aws_eks_cluster.terraform_cluster.certificate_authority[0].data
}

output "cluster_version" {
  description = "Kubernetes version running on the cluster"
  value       = aws_eks_cluster.terraform_cluster.version
}

output "cluster_arn" {
  description = "EKS cluster ARN"
  value       = aws_eks_cluster.terraform_cluster.arn
}

output "oidc_issuer" {
  description = "OIDC issuer URL - needed for IRSA and Pod Identity setup"
  value       = aws_eks_cluster.terraform_cluster.identity[0].oidc[0].issuer
}

output "node_group_name" {
  description = "Node group name"
  value       = aws_eks_node_group.cpu-node.node_group_name
}

output "node_role_arn" {
  description = "Node IAM role ARN - needed when setting up Karpenter EC2NodeClass"
  value       = data.aws_iam_role.noderole.arn
}

output "public_subnet_ids" {
  description = "Public subnet IDs - needed for ALB controller subnet tagging"
  value       = data.aws_subnets.subnet.ids
}

output "vpc_id" {
  description = "VPC ID"
  value       = data.aws_vpc.vpc.id
}
