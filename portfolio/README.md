# Portfolio

This project was done for <b>'Meta Front-End Developer Professional Certificate'</b> and demonstrates the React App and it's integration with next libraries.

## Content
* [fontawesome](#fontawesome) 
* [chakra](#chakra) 

### Fontawesome
<b>Font Awesome</b> is a popular icon library that provides scalable vector icons that can be customized with CSS. 

#### Imports:
```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
```

#### Creating an icon dataset:
```js
const socials = [
  {
    key: 1,
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    key: 2,
    icon: faGithub,
    url: "https://github.com",
  },
  {
    key: 3,
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    key: 4,
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    key: 5,
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
```

#### Displaying icons:
```js
<nav>
    {socials.map(item => (
      <a key={item.key} href={item.url} className="headerIcon">
        <FontAwesomeIcon icon={item.icon} size="2x"/>
      </a>
    ))}
</nav>
```

### Chakra
<b>Chakra</b> UI is a simple, modular and accessible component library that provides you with the building blocks you need for your React applications. 

#### Imports
```js
import { Avatar, Heading, VStack } from "@chakra-ui/react";
```

#### Usage
```js
  <Avatar name="Nick Jonas" src="https://i.pravatar.cc/150?img=3" size="6xl"/>
  <Heading>{greeting}</Heading>
  <VStack>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </VStack>
```

