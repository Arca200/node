import download from 'download-git-repo'

download('direct:', './xxx', {clone: true}, (err) => {
    console.log(err)
})