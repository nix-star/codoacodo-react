import '../../style/inicio/iconsBar.css'
//import Bestsellers from './iconsBar/Bestsellers'

const IconsBar = () => {
    return (
        <>
        <div className="iconsBar-container">
        <ul>
            <div className="arrows"> </div>
            <div className="bar">
            <li><a href="/bestseller"><i class="fa-solid fa-thumbs-up"></i></a> </li>
            <p>Bestsellers</p>
            </div>
            <div className="bar">
            <li><a href="/new"><i class="fa-solid fa-book"></i></a></li>
            <p>New Releases</p>
            </div>
            <div className="bar">
            <li><a href="/signed"> <i className="fa-solid fa-pen-nib"></i></a></li>
            <p>Signed Editions</p>
            </div>
            <div className="bar">
            <li><a href="/audio"><i class="fa-solid fa-headphones"></i></a> </li>
            <p>AudioBooks</p>
            </div>
            <div className="bar">
            <li><a href="/gift"><i class="fa-solid fa-gift"></i></a> </li>
            <p>GiftCards</p>
            </div>
            <div className="bar">
            <li><a href="/coupons"><i class="fa-solid fa-scissors"></i></a></li>
            <p>Coupons</p>
            </div>
        </ul>
        </div>
        </>
    )
}

export default IconsBar