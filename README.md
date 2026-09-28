# Rick and Morty Microfrontends

Aplicación desarrollada con React, Webpack Module Federation y Bootstrap. Permite consultar personajes de Rick and Morty, aplicar filtros y revisar los episodios de cada personaje.

## Estructura del proyecto

El proyecto está separado en tres aplicaciones:

### Shell

Aplicación principal se encargada de las rutas y de cargar los microfrontends.

```
http://localhost:3000
```

### Characters

Muestra el listado de personajes, filtros y paginación.

```
http://localhost:3001
```

### Character Detail

Muestra la información del personaje y sus episodios.

```
http://localhost:3002
```

## Requisitos

- Node.js 22
- npm
- Docker Desktop

## Instalación

clonar el repositorio:

```bash
git clone URL_DEL_REPO
```

cntrar en la carpeta:

```bash
cd rick-morty-microfrontends
```

instala las dependencias:

```bash
npm install
```

## Ejecución local

Para iniciar las tres aplicaciones:

```bash
npm start
```

Este comando inicia:

```
Shell:             http://localhost:3000
Characters:        http://localhost:3001
Character Detail:  http://localhost:3002
```

La aplicación principal se abre desde:

```
http://localhost:3000
```

### Ejecutar cada aplicación por separado

Abrir tres terminales diferentes y ejecutar un comando en cada una.

Shell:

```bash
npm run start -w @rick-morty/shell
```

Characters:

```bash
npm run start -w @rick-morty/characters
```

Character Detail:

```bash
npm run start -w @rick-morty/character-detail
```

Para que el shell funcione correctamente, los tres procesos deben estar activos.

## Build

Para generar el build de todas las aplicaciones:

```bash
npm run build
```

También se puede construir cada aplicación por separado:

```bash
npm run build -w @rick-morty/shell
```

```bash
npm run build -w @rick-morty/characters
```

```bash
npm run build -w @rick-morty/character-detail
```

## Pruebas

Para ejecutar las pruebas:

```bash
npm test
```

Para ejecutar unicamente las pruebas de Characters:

```bash
npm test -w @rick-morty/characters
```

## Docker

Antes de iniciar los contenedores, comprobar que Docker desktop este funcionando.

Para construir e iniciar los tres servicios:

```bash
docker compose up --build
```

La aplicacion estará disponible en:

```
http://localhost:3000
```

Para revisar los contenedores activos:

```bash
docker compose ps
```

Para detenerlos:

```bash
docker compose down
```

## Module Federation

Characters expone:

```
characters/Characters
```

Character Detail expone:

```
characterDetail/CharacterDetail
```

El shell carga los componentes desde:

```
http://localhost:3001/remoteEntry.js
http://localhost:3002/remoteEntry.js
```
