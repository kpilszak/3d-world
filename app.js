function main() {
    const canvas = document.querySelector('#c')

    const fov = 50
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const aspect = width / height
    const near = 0.1
    const far = 2000

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(width, height)

    const scene = new THREE.Scene()
    const loader = new THREE.TextureLoader()
    const texture = loader.load(
        'https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg',
    () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
        rt.fromEquirectangularTexture(renderer, texture)
        scene.background = rt.texture
    })

    function render () {
        renderer.render(scene, camera)
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

main()