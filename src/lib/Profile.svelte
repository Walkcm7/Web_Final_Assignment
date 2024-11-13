<script>
    export let profile;

    // Construct full name and ensure there's a space only if the last name exists
    const fullName = profile.first_name + (profile.last_name ? " " + profile.last_name : "");
</script>

<article class="user-profile">
    <img src={profile.avatar} alt="{fullName}'s profile avatar" class="avatar">
    <div class="profile-content">
        <h3>{fullName}</h3>
        <p><em>{profile.reviewText}</em></p>
    </div>
    <figure class="rating" aria-label="Rating of {profile.rating} out of 5">
        {'★'.repeat(profile.rating)}{'☆'.repeat(5 - profile.rating)}
    </figure>
</article>

<style>
    .user-profile {
        display: flex;
        align-items: flex-start;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1.5em;
        margin: 0.6em 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 1000px;
        width: 100%;
        gap: 16px;
    }

    .avatar {
        width: 5em;
        height: 5em;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 16px;
    }

    .profile-content {
        flex-grow: 1;
    }

    .profile-content h3 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;
    }

    .profile-content p {
        margin: 8px 0 0 0;
        font-style: italic;
        color: #666;
        font-size: 1rem;
    }

    .rating {
        font-size: 1.5rem;
        color: #ffc700;
        margin-left: 16px;
        display: inline-block;
    }
</style>
