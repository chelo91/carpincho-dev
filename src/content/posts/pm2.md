---
title: "Qué es PM2?"
slug: "pm2"
description: "Paquete de Node para levantar un proyectos en el servidor"
date: "2023-10-14"
tags: ["node","linux"]
draft: false
---

### Qué es PM2?
Es un paquete de Node que sirve para levantar un proyecto en el servidor, es decir, que se mantenga corriendo en el servidor.

### Para que sirve SCP?
A diferencia de Nodemon o ejecutar directo con Node, PM2 está pensado para producción con caracteristicas como:
- Ver el estado de a tiempo real de varias ejecuciones de Node
- Manejo de Logs
- Reinicio del proceso en caso de que se haya detenido
- Entre otros 

### Instalacion
- Con yarn:
```bash
yarn global add pm2
```

- Con npm:
```bash
npm install pm2 -g
```

### Funciones
- Lista aplicaciones corriendo
```bash
pm2 list
```

- Levantar pm2 con un comando en especial
```bash 
# En mi caso ejecuto el paquete de esa forma, pero depende de cada uno
# @nombre sustituimos con el nombre que querramos
pm2 start "yarn run start" --name @nombre
```