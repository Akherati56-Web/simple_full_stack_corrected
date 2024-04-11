#!/bin/bash
echo $(pwd)
#ansible-playbook -v ./playbooks/qemu-guest-agent.yml --user root -i ./inventory/hosts
ansible-playbook -vvv ./playbooks/test.yml --user root -i ./inventory/hosts

