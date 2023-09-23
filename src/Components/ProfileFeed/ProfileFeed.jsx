export default function ProfileFeed(userposts) {
    return (
        <>            
            <div className='profile-pics'>
                {userposts.map(post => (
                    <div 
                        className='profile-pic'
                        key={post._id}
                    >                                
                    <img src={post.picture} alt={post.description} />
                </div>
                ))}                               
            </div>
        </>
    )
}