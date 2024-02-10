import React from 'react'
import Banner from '../components/banner/Banner'
import {Banner as ImgBanner} from "../components/img/Image"

const Package = () => {
	return (
		<div>
            <Banner image={ImgBanner.Banner1} header="Package" text="Home / Pages / Package" />
		</div>
	)
}

export default Package
