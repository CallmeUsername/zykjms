const BASE_URL = 'https://api-hmugo-web.itheima.net'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.statue !== 0) {
					return uni.showToast({
						title: ''
					})
				}
					resolve(res)
				},
			fail: (err) => {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}

myRequest({
	url: '/api/public/v1/home/swiperdata',
	method: 'POST',
	data: {
		
	}
})