resource "proxmox_lxc" "basic" {
  target_node  = "proxmox"
  hostname     = "lxc-basic"
  ostemplate   = "local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst"
  password     = "12345"
  unprivileged = false

  ssh_public_keys = <<-EOT
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDFH7AfPHFV+CgD+eEBtMGwftzYAYc6gfxvAajSK5uaOyCq3jp8oyBNQSjSRl5iecUN2Q9KhM2Ckxgc5UhhnLJ+Dk4klP9X2c2gLimpG2SK6GLVuKFmExKdaMUAOJNQsP2AhuoKFj/1je9aDjKLRLZHTmhHvB+AsoHhL8JO2QUjZ7cMTe3PqwlUIenlbI5Sjz/GETONhxOjYOKoieC/NnGNKnmq8bGE8nQDrKwcvKUMdIkVzLzgQYn7d+PGRaea1jmWCGPucU/HTy94Cqwn1YAB3WP0XPR5difCE8mypnLWCCVoQ8FHV0HMN5aXDUt4fgDwvf+zfL2LhJix9kIa8hSc6v0iwmxBGmhtnrzmSfp4y04xRVJfpdwaOlNsv//yp/DzG4rIp4qrQtKRieW410NaRx0ypfGbGC7/jYwh1zpwsk+jtDL7r4epZGO+TK0hpGFuru5V33XllHl6mXRz+xF0KVKnrzKuuyjxo/8xkEN0yi0rpPsqlHMbfK6e/BjzjKU= akherati@akherati
  EOT

  // Terraform will crash without rootfs defined
  rootfs {
    storage = "local-lvm"
    size    = "5G"
  }
 
  network {
    name   = "eth0"
    bridge = "vmbr0"
    ip     = "192.168.122.90/24"
    gw     = "192.168.122.100"
  }
}