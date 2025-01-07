document.querySelector('.tilt-box').addEventListener('mousemove', (e) => {
    const box = e.target;
    const rect = box.getBoundingClientRect();
  
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
  
    const intensity = 20;
    const rotateX = (y / rect.height) * -intensity; 
    const rotateY = (x / rect.width) * intensity; 
  
    box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
document.querySelector('.tilt-box').addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });

  document.addEventListener('DOMContentLoaded', () => {
    const wrappers = document.querySelectorAll('.iframe-wrapper');

    wrappers.forEach(wrapper => {
        const iframe = wrapper.querySelector('iframe');
        const fullscreenBtn = wrapper.querySelector('.fullscreen-btn');
        const exitFullscreenBtn = wrapper.querySelector('.exit-fullscreen-btn');

        fullscreenBtn.addEventListener('click', () => {
            iframe.style.width = '100vw';
            iframe.style.height = '100vh';
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.border = 'none';
            iframe.style.left = '0';
            iframe.style.zIndex = '1000';
            fullscreenBtn.classList.add('hidden');
            exitFullscreenBtn.classList.remove('hidden');
        });

        exitFullscreenBtn.addEventListener('click', () => {
            iframe.style = '';
            fullscreenBtn.classList.remove('hidden');
            exitFullscreenBtn.classList.add('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
        const iframeContainer = document.querySelector('.iframe-container');
        const wrappers = iframeContainer.querySelectorAll('.iframe-wrapper');

        wrappers.forEach(wrapper => {
            const iframe = wrapper.querySelector('iframe');
            const fullscreenBtn = wrapper.querySelector('.fullscreen-btn');
            const exitFullscreenBtn = wrapper.querySelector('.exit-fullscreen-btn');

            const enterFullscreen = () => {
                iframeContainer.classList.add('fullscreen-active');
                wrapper.classList.add('fullscreen');
                iframe.style.transform = 'scale(1)';
                fullscreenBtn.classList.add('hidden');
                exitFullscreenBtn.classList.remove('hidden');
            };

            const exitFullscreen = () => {
                iframeContainer.classList.remove('fullscreen-active');
                wrapper.classList.remove('fullscreen');
                fullscreenBtn.classList.remove('hidden');
                exitFullscreenBtn.classList.add('hidden');

                setIframeScale();
            };

            
            const setIframeScale = () => {
                if (!wrapper.classList.contains('fullscreen')) {
                    const wrapperWidth = wrapper.offsetWidth;
                    const wrapperHeight = wrapper.offsetHeight;

                    
                    const scaleWidth = wrapperWidth / 1920;
                    const scaleHeight = wrapperHeight / 1080;

                    const scale = Math.min(scaleWidth, scaleHeight);
                    iframe.style.transform = `scale(${scale})`;
                }
            };

            setIframeScale();
            window.addEventListener('resize', setIframeScale);

            fullscreenBtn.addEventListener('click', enterFullscreen);
            exitFullscreenBtn.addEventListener('click', exitFullscreen);
        });
    });
