
import LazyLoad from 'react-lazy-load';

const MyComponent = ({children}) => (
  <div>
    <LazyLoad height={762}>
        {children}
    </LazyLoad>
  </div>
)

export default MyComponent;