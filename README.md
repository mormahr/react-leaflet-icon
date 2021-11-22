# react-leaflet-icon

Install using npm or yarn:

```sh
npm install react-leaflet-icon
```

## Usage

```jsx
import { useLeafletIcon } from "react-leaflet-icon"
import { Marker } from "react-leaflet"

function SomeComponent({ position }) {
  const [markerIcon, MarkerIcon] = useLeafletIcon()

  return <>
    <MarkerIcon>
      {/* custom icon content */}
    </MarkerIcon>
    <Marker position={position} icon={markerIcon} />
  </>
}
```
