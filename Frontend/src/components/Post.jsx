import img from '../assets/img.jpg'

export const Post = () => {
    return (
        <div className='post'>
            <img src= {img} alt="" />
            <div className='text'>
                <h2>The Echo of Untold Stories: Feminism and the Future of Folklore</h2>
                <p className="info">
                <span>Author</span>
                <time >2022-12-30</time>
                </p>
                <p>Every culture pulsates with a heartbeat – a rhythm intertwined through the threads of tradition, music, dance, and oral history. Yet, these stories often remain untold, muffled by the clamour of modernity or lost in the vast echo chamber of the digital age</p>
            </div>
        </div>
    )
}