# JavaScript Pizza Example

Question I am answering:
```
Assume we have an existing partial page for a pizza shop.  Tasks to be done:

A) Add a dropdown list with several pizza types including:  
- Cheese, Vegetarian, Meat Lover, All In, Build My Own 
-- When the page loads, none of the options should be selected. 

B) Add checkboxes showing all the possible ingredients (which ones are up to you), 
- alphabetized, 
- with at least one option applicable to each pizza type. 
-- When the page loads, none of the ingredients should be checked. 

C) When the user selects any pizza type, except "Build My Own", 
- the ingredients for that type of pizza should be checked. 
- ingredients inappropriate to that type of pizza should be unchecked.

D) The user should be able to check or uncheck ingredients. 

Constraints: 
- Do not hard code the contents of the lists (type or ingredients) on the React page.  
This info should be fetched from the server as JSON when the page loads. 

```

If you want to try this out yourself, then clone the repository and run
```
npm install
```
and then run the following command in one terminal
```
npm run start
```
and this one in another
```
npm run build:watch

---or---

npm run build:dev
```