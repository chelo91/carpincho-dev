---
title: PM2
date: "2022-10-07"
author: "Chelo"
description: "Paquete de Node para levantar un proyecto"
tags: ["node","linux"
]
slug: "pm2"
---

## Qué es PM2?
Es un paquete de Node que sirve para hacer gestión de procesos

## Para que sirve SCP?
A diferencia de Nodemon o ejecutar directo con Node, PM2 está pensado para producción con caracteristicas como:
- Ver el estado de a tiempo real de varias ejecuciones de Node
- Manejo de Logs
- Reinicio del proceso en caso de que se haya detenido
- Entre otros 

## Instalacion
- Con yarn:
```bash
yarn global add pm2
```

- Con npm:
```bash
npm install pm2 -g
```

## Funciones
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