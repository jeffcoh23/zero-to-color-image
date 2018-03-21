### ZeroToColorImage

##### Description
React component that displays an image going from 100% grayscale to 0% grayscale.  Essentially, this effect makes an image look like it is going from black-and-white to color.

 - `npm install --save zero-to-color-image`


###### Example Usage
```
<ZeroToColorImage style={{height: '100vh'}} animationLength={5} imageSource={require('./jeff_south_africa.JPG')}/>
```

#### Props
**animationLength** (required): The duration of the conversation (in seconds from black to white)

**imageSource** (required): A string representation of the image source.
