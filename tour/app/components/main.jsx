import {TourHeader} from './header.jsx'
class TourContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='tour-content'>
        <TourHeader />
        <section className='tour-section'></section>
        <footer className='tour-footer'></footer>
      </div>
    )
  }
}

ReactDOM.render(
  <TourContent />,
  document.getElementById('example')
)
