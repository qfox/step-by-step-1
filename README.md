# Сборка БЭМ-проектов - шаг за шагом

## Что это

Репозиторий с кодом БЭМинара, разбитый по шагам.

## Как использовать

Клонируете репозиторий к себе:

```
git clone https://github.com/zxqfox/step-by-step-1.git tmp
cd tmp
```

Получить список срезов:

```
git tag --list | grep point
```

Изменения между двумя срезами:

```
git diff point3 point4
```

Сборка среза:

```
git checkout point3
gulp build
tree
```

>**NB:** Чтобы использовать `tree` вам нужно её установить:
> - `brew install tree` если у вас MacOS
> - `apt-get install tree` если у вас Ubuntu/Debian
> - http://mama.indstate.edu/users/ice/tree/
