# Portfolio

This project was done for <b>'Meta Front-End Developer Professional Certificate'</b> and demonstrates the React App and it's integration with next libraries.

## Content
* [fontawesome](#fontawesome) 

### fontawesome
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