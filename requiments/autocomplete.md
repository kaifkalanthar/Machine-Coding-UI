## Functional Requirement

- User should be able to give an input and get the relevant result
- List should be shown as user starts to type
- When clearing the search value, the list should be closed.

## Best Practice

- Consider using the SSR
- Debounce the value

## API Requirements

- API to get the list of items and should give an support to searching.

Endpoint - `https://jsonplaceholder.typicode.com/posts?q=sunt`

Example Type

```
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

## UI

|-----------------|
|search value     |
|-----------------|

value 1
_________
value 2
________
value 3
_______

## Component Architecture

- app
- components
    - Autocomplete.tsx -> options, placeholder, value, defaultValue, handleOnSelect, handleOnClose


## Usage
```
<Autocomplete
options={options}
placeholder={placeholder}
value={value}
handleOnSelect={handleOnSelect}
handleOnClose={handleOnClose}
/>
```


## Advanced

- Accessibility
- Aria labels
- Multiple Select