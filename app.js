function main() {
    const canvas = document.querySelector('#c')

    const fov = 50
    const aspect = canvas.clientWidth / canvas.clientHeight
    const near = 0.1
    const far = 2000

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
}

main()