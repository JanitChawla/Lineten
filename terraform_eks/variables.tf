variable "region" {
  description = "Region"
  type        = string
  default     = "us-east-2"
}

variable "vpc" {
  description = "vpc ID"
  type        = string
  default     = "vpc-0a955311a4d878cac"
}

variable "iamrole" {
  description = "iam role name"
  type        = string
  default     = "AmazonEKSClusterRole"
}

variable "noderole" {
  description = "node iam role name"
  type        = string
  default     = "eks_cpu-nodes"
}
