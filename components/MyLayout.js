import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  'backgroundColor': '#edf5f8',
  'fontFamily': 'Avenir Next, Avenir, SegoeUI, Franklin Gothic, arial, sans-serif'

}

const Layout = ({children}) => (
  <div style={layoutStyle}>
    {children}
  </div>
)

export default Layout
