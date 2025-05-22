#!/bin/bash
read -p "enter your commit message :: " commit
git add .
git commit -m "$commit"
git push -u origin my-main
