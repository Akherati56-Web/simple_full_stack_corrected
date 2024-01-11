#!/bin/bash
echo $(pwd)
ansible-playbook ./playbooks/qemu-guest-agent.yml --user ali -i ./inventory/hosts

