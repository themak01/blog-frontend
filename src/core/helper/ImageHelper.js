import React from 'react';
import { API } from '../../backend';

const ImageHelper = ({post}) => {

    const imageurl = post ? `${API}/post/photo/${post._id}`: `https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png`
    return (
        <div className="rounded border border-success p-2">
                <img
                  src={imageurl}
                  alt="photo"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
              </div>
    )
}

export default ImageHelper;