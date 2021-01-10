#imagen base
FROM diamol/node

#variables de entorno
ENV TARGET="google.com.ar"
ENV METHOD="HEAD"
ENV INTERVAL="2500"

#Directorio de trabajo
WORKDIR /web-ping
#Copia codigo fuente a contenedor
COPY app.js .

CMD ["node", "/web-ping/app.js"]
