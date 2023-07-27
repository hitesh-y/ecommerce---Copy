import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BlogLoder = () => {
    return (
      
      <div class="row dlab-blog blog-half m-b30 mx-0" >
          <div class="col-xl-12" style={{position: 'relative'}}>
              <Skeleton height={50} count={1} />
          </div>
          <div class="col-xl-9 col-lg-9 col-md-9 col-8 dlab-info">
              <div class="blog-user">
                  <Skeleton height={40} count={1} />  
              </div>
                      
              <Skeleton height={50} count={1} />  
              <Skeleton height={80} count={1} />  
              <Skeleton height={10} count={1} />  
          </div>
                  
          <div class="col-xl-3 col-lg-3 col-md-3 col-4 dlab-media">
              <Skeleton height={150} />
          </div>
                  
          <div class="stat-tools">
              <Skeleton height={20} count={1} />  
              
          </div>
      </div>
       
    )
  }
  
  export default BlogLoder;