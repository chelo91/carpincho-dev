---
title: "Qué es SCP?"
slug: "scp"
description: "Guia básica del comando SCP"
date: "2023-10-13"
tags: ["linux"]
draft: false
---

Es un comando de Linux para hacer una transferencia de archivo entre 2 host.

### Para que sirve SCP?
Para transferencia entre servidores, puede ser algo confuso pero es muy sencillo, imaginte que tuvieras que pasar un respado de una DB de un servidor a otro, en vez de descargar el respaldo y subirlo al otro servidor, podemos hacer la transferencia de servidor a servidor en un par de lineas de comando y todavía es más fácil si tenemos configurado algún tipo de autenticación como **claves SSH**.

### Formas de uso
Principalmente consta de 3 formas de uso:

- De archivo local a una ubicación remota <br>
  <span style="color:wheat">Ej copiamos un .zip que en el escritorio de mi local y lo pasamos a carpeta root de mi srv remoto</span>
    ```bash
    scp /users/Chelo/desktop/scp.zip root@IP_REMOTA_DESTINO:/root/
    ```

- De archivo remoto a máquina local  <br>
    <span style="color:wheat">Ej copiamos un .zip en root del remoto y lo pasamos al escritorio de mi local</span>
    ```bash
    scp root@IP_REMOTA_ORIGEN:/root/SCP.zip /users/Chelo/desktop/
    ```

- De archivo remoto a otra ubicación remota *que personalmente considero que es el más util de los 3* <br>
    <span style="color:wheat">Ej copiamos un .zip en root del remoto y lo pasamos a root de otro remoto</span>
    ```bash
    scp root@IP_REMOTA_ORIGEN:/root/SCP.zip chelo@IP_REMOTA_DESTINO:/root/
    ```

> El comando por si solo es algo útil, pero si lo combinamos con otros comandos como **tar** o **gzip** podemos hacer respaldos de archivos o carpetas y pasarlos a otro servidor, también usando tareas programadas como **cron** podemos que sean automáticos.