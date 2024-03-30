
# Demo Team Project

This is our first team project in which we are going to develop simple MERN Project which is associated with cars Dealing Plateform.

# Flourish 
is best car dealing brand in market so, now they want to move forward in tech word and we have to build a project for them so,i am requesting you all to contribute in this project.

# page

- Landing Page
- Car add page






## API Reference

#### Get all items

```http
  GET /items
  
```


#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Post item

```http
  POST item/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### edit item

```http
  POST item/edit/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### delete item

```http
  DELETE item/delete/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add item image

```http
  POST item/image/add
```










## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

For Frontend 

`REACT_APP_URL`for base url

For Backend 

`MONGO_URL`mongodb url

`PORT`

