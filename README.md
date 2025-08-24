# vue-copy-2-clipboard
A lightweight, robust, and easy-to-use Vue 3 composable for copying text to the clipboard. Built with the Composition API, it provides a clean and reactive way to handle copy-to-clipboard functionality in your applications.

## 🤔 Why use this package?
  While the browser's native navigator.clipboard API is powerful, this composable simplifies its use by:

  Handling Promises & State: It manages the async writeText promise and provides reactive states (copied, error) out of the box. You don't have to write your own try...catch blocks or manage reactive variables.

  Providing a Clean Interface: Abstracts the native API into a simple and intuitive useClipboard() function.

  Encouraging Reusability: Encapsulates the core logic, making it easy to reuse across multiple components without duplication.

## 📦 Installation
To get started, install the package using npm:

### Bash
```bash
npm install vue-copy-2-clipboard
```

## 🚀 Usage
The composable provides a copy method to perform the copy action and exposes reactive properties (copied, error) to track the result.

### Basic Example
Use the composable with a static string.

Code snippet
```vue
<template>
  <button @click="copy">
    {{ copied ? 'Copied!' : 'Copy Text' }}
  </button>
</template>

<script setup>
import { useClipboard } from 'vue-copy-2-clipboard';

const { copy, copied } = useClipboard('Hello, Vue.js!');
</script>
```

**Dynamic Example**
(Use the composable with a reactive variable. The copy method will automatically use the latest value of the Ref.)

Code snippet
```vue
<template>
  <div>
    <input type="text" v-model="textToCopy" />
    <button @click="copy">
      {{ copied ? 'Copied!' : 'Copy Input' }}
    </button>
    <p v-if="error" class="error-message">Error: {{ error.message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useClipboard } from 'vue-copy-2-clipboard';

const textToCopy = ref('Initial Text');
const { copy, copied, error } = useClipboard(textToCopy);
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
```

## 📋 API
The useClipboard composable accepts one argument and returns an object with reactive properties and methods.

`useClipboard(textToCopy)`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `textToCopy` | `string` or `Ref<string>` | The text you want to copy to the clipboard. This can be a simple string or a reactive reference to a string. |

<br>

**Returns:**

The function returns an object with the following properties and methods:

| Property | Type | Description |
| :--- | :--- | :--- |
| `copy` | `Function` | A function to trigger the copy operation. This is an `async` function that returns a Promise. |
| `copied` | `Ref<boolean>` | A reactive boolean that is `true` if the copy operation was successful. It resets to `false` on a new copy call. |
| `isSupported` | `boolean` | A boolean that is `true` if the user's browser supports the Clipboard API. |
| `error` | `Ref<Error \| null>` | A reactive reference that holds any error that occurred during the copy operation. |

## 🧑‍💻 Contributing
Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, please feel free to open an issue or a pull request on the GitHub repository.

### Fork the repository.

Clone your forked repository: 
```git
git clone https://github.com/saurav0896/vue-copy-2-clipboard.git
```

### Install dependencies: 
```bash
npm install
```

Make your changes.

### Build the package:
```bash
npm run build
```

Commit your changes and push to your fork.

Create a Pull Request.

### 📝 License
This project is licensed under the MIT License.

**Author:** Saurav Singh
<br>
**Repository:** https://github.com/saurav0896/vue-copy-2-clipboard
