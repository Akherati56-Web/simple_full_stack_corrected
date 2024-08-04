pid_file = "/vault/agent/agent.pid"

auto_auth {
  method "token" {
    config = {
      token = "root"
    }
  }

  sink "file" {
    config = {
      path = "/vault/agent/token"
    }
  }
}

cache {
  use_auto_auth_token = true
}

vault {
  address = "http://vault-server:8200"
}

template {
  source = "/vault/config/template.ctmpl"
  destination = "/vault/secrets/secret.txt"
}
