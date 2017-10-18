FROM ubuntu

# Install Java.
RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get -q -y install default-jdk
RUN apt-get install apt-transport-https -y

#Install gauge
RUN apt-key adv --keyserver hkp://pool.sks-keyservers.net --recv-keys 023EDB0B
RUN echo deb https://dl.bintray.com/gauge/gauge-deb stable main | sudo tee -a /etc/apt/sources.list
RUN apt-get update
RUN apt-get install gauge
RUN gauge install java

ENV PATH=$HOME/.gauge:$PATH
