#!/bin/bash
echo "Chose your installation option (Update System first):"
options=("Update System" "Install Docker" "Install Docker-compose" "Install NodeJS" "Registry to Docker" "Quit")
select opt in "${options[@]}"
do
	case $opt in
		"Update System")
			sudo apt-get update -y
			sudo apt-get upgrade -y
			;;
		"Install Docker")
			sudo apt install apt-transport-https ca-certificates curl software-properties-common
			curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
			sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
			sudo apt update -y
			apt-cache policy docker-ce
			sudo apt install docker-ce
			sudo usermod -aG docker $(whoami)
			su - $(whoami)
			docker -v
			;;
		"Install Docker-compose")
			sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
			sudo chmod +x /usr/local/bin/docker-compose
			docker-compose -v
			;;
		"Install NodeJS")
			curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
			sudo bash nodesource_setup.sh
			sudo apt install nodejs
			node -v
			sudo rm nodesource_setup.sh
			;;
		"Registry to Docker")
			docker login registry.protofy.xyz
			npm config set registry https://npm.protofy.xyz
			cd ../
			./tools.sh npm i
			;;
		"Quit")
			break
			;;
		*) echo "invalid option $REPLY";;
	esac
done
