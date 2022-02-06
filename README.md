# TSDX React User Guide

Congrats! You just saved yourself hours of work by Importing one of many custom Animations.

## Installation

The recommended installation is:

```bash
npm i simple-react-animations-v2
```

Usage :

```bash
import { Card1, Flower3, Jasmine } from "simple-react-animations-v2";

import "simple-react-animations-v2/dist/simple-react-animations-v2.cjs.development.css";

function App() {

  return (
    <div className="App">
      <Card1/>

      <Flower3/>

      <Jasmine/>
    </div>
  );
}

export default App;

```

It is important to add the Second import to use the Css Animations along side vanilla Css structure.
<br>
<br>
<b>For a full preview of each Animation vist my Site here</b>
<br>
<br>

## Optional Configuration :

<details>
<summary>Card1 , Card2 , Card3</summary>
<br>

```
<Card1
  size="300px"
  border="solid thin black"
/>
```

</details>

---

<details>
<summary>Flower1 , Flower2 , Flower3</summary>
<br>

```
<Flower
  size="300px"
  border="solid thin black"
/>
```

</details>

---

<details>
<summary>Jasmine</summary>
<br>

```
<Jasmine
  size="300px"
  border="solid thin black"
/>
```

</details>
# School-of-Code_Animations_Site
