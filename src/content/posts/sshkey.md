---
title: "Qué una clave SSH?"
slug: "sshkey"
description: "Conceptos básicos del comando"
date: "2024-04-06"
tags: ["linux"]
draft: false
---

### Introducción
Una clave SSH es una forma de autenticación utilizada en conexiones SSH que ofrece mayor seguridad y comodidad al acceder a servidores remotos. En este artículo, exploraremos qué es una clave SSH, cómo se crea y cómo se utiliza en entornos de Linux.

### ¿Qué es una clave SSH?
Una clave SSH es un par de archivos generados mediante el comando ssh-keygen. Estos archivos consisten en una clave privada (id_rsa) y una clave pública (id_rsa.pub). La clave privada se mantiene en nuestro equipo y nunca debe ser compartida, mientras que la clave pública se comparte con el servidor remoto para autenticar la conexión.

### Creación de una clave SSH
La creación de una clave SSH es sencilla y se realiza con el comando ssh-keygen. Es posible agregar una frase de seguridad para aumentar la protección.

```bash
ssh-keygen
```

### Uso de la clave SSH
Una vez creada la clave SSH, podemos copiar la clave pública (id_rsa.pub) al servidor remoto colocando en el archivo known_hosts dentro de la carpeta .ssh en la carpeta personal. Esto permite la autenticación sin necesidad de ingresar una contraseña cada vez que nos conectamos al servidor.

### Ventajas de utilizar claves SSH
- Mayor seguridad: Las claves SSH ofrecen un nivel adicional de seguridad en comparación con la autenticación basada en contraseñas.
- Comodidad: Eliminan la necesidad de ingresar contraseñas cada vez que nos conectamos al servidor remoto.
- Automatización: Facilitan la automatización de tareas mediante conexiones SSH sin intervención manual.

En resumen, las claves SSH son una herramienta fundamental en entornos Linux que brindan seguridad y comodidad en las conexiones remotas. Su uso adecuado contribuye a una gestión eficiente de sistemas y servicios.