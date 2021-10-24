import React from 'react'

const Gallery = () => {
    return (
        <section className="mbr-gallery cid-rGtDhIxNyM" id="shop1-3n">
            <div className="container">
                <div className="mbr-shop" show-sidebar="" card-buttons="">
                    <div className="row mbr-shop__row col-md-12">
                        <div className="wrapper-shop-items col-xl-9">
                            <div className="mbr-gallery-row">
                                <div>
                                    <div className="shop-items">
                                        <div className="mbr-gallery-item" data-tags="Awesome" data-slide-to="0" data-seller="false" data-price="80" data-oldprice="160">
                                            <div className="item_overlay" data-toggle="modal"></div>
                                            <div className="galleryItem" data-toggle="modal">
                                                <div className="style_overlay"></div>
                                                <div className="img_wraper"><img src="assets/images/mbr-1920x1280-800x533.jpg" alt="" title="" /></div>
                                                <span className="onsale mbr-fonts-style display-7" data-onsale="false" style={{ display: "none" }}>-50%</span>
                                                <div className="sidebar_wraper">
                                                    <h4 className="item-title mbr-fonts-style mbr-text display-5">Blue Ball</h4>
                                                    <div className="price-block"><span className="shop-item-price mbr-fonts-style display-5">$80</span><span className="oldprice mbr-fonts-style display-7" style={{ display: "none" }}>$160</span></div>
                                                    <div className="card-description">
                                                        Casual shoes (contact us for sizing)<br /><br />
                                                        <ul>
                                                            <li>Lightweight textured fabric</li>
                                                            <li>Rounded v-neckline</li>
                                                            <li>Pom pom trims</li>
                                                            <li>Regular fit – true to size</li>
                                                        </ul>
                                                        <br />Duis auctor hendrerit nisi, at lacinia ex vulputate quis. Suspendisse convallis iaculis tortor, quis mattis lectus rutrum a.<br /><br />Product code: <strong>385DDF5p</strong>
                                                    </div>
                                                    <div className="mbr-section-btn" style={{ display: "none" }}><a href="https://mobirise.com/" className="btn btn-primary display-7">Buy now!</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                        <div className="col-xl-3 sidebar">
                            <div className="sidebar-background"></div>
                            <div className="sidebar-block container range-slider">
                                <h4 className="sidebar-title mbr-fonts-style mbr-text display-7">Price Range</h4>
                                <div className="filter-cost">
                                    <div className="price-controls"><label className="min-price"><input className="min-input" type="text" value="2" name="min" /></label><label className="max-price"><input className="max-input" type="text" value="90" name="max" /></label></div>
                                    <div className="range-controls">
                                        <div className="scale">
                                            <div className="bar"></div>
                                        </div>
                                        <div className="toggle min-toggle"></div>
                                        <div className="toggle max-toggle"></div>
                                    </div>
                                </div>
                                <div className="price-range mbr-section-btn"><a className="btn btn-sm btn-primary" href="#">Filter</a></div>
                                <div className="price-range-reset mbr-section-btn" ><a className="btn btn-sm btn-secondary" href="#">Show all</a></div>
                            </div>
                            <div className="sidebar-block container sidebar-categories">
                                <h4 className="sidebar-title mbr-fonts-style mbr-text display-7">Filter</h4>
                                <div className="categories col-md-12">
                                    <div className="categories-titles">
                                        <div className="mbr-gallery-filter mbr-shop-filter container gallery-filter-active">
                                            <ul>
                                                <li className="mbr-gallery-filter-all active display-7">All</li>
                                                <li className="display-7">Awesome</li>
                                                <li className="display-7">Wonderful</li>
                                                <li className="display-7">Creative</li>
                                                <li className="display-7">Responsive</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shopItemsModal_wraper" style={{ zIndex: 100 }}>
                        <div className="shopItemsModalBg"></div>
                        <div className="shopItemsModal row">
                            <div className="col-md-6 image-modal"></div>
                            <div className="col-md-6 text-modal"></div>
                            <div className="closeModal">
                                <div className="close-modal-wrapper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
