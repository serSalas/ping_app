#imagen base
FROM diamol/node

CMD ["node", "/web-ping/app.js"]

#variables de entorno
ENV TARGET="google.com.ar" \
METHOD="HEAD" \
INTERVAL="2500"

#Directorio de trabajo
WORKDIR /web-ping
#Copia codigo fuente a contenedor
COPY app.js .
