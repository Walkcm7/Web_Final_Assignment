<script>
    export let profile;

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
        gap: 1em;
        box-sizing: border-box;
    }

    .avatar {
        width: 6em;
        height: 6em;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1em;
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
        margin: 0.5em 0 0 0;
        font-style: italic;
        color: #666;
        font-size: 1rem;
    }

    .rating {
        font-size: 1.5rem;
        color: #ffc700;
        margin-left: 1em;
        display: inline-block;
    }

    @media (max-width: 840px) {

        .user-profile {
            margin-bottom: 0.6em;
            padding: 0.2em;
        }

        .avatar {
            width: 2em;
            height: 2em;
            margin-right: 0.2em;
            margin-top: 0.5em;
        }
    }
</style>
