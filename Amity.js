const https = require('https');
const AmityClient = require('@amityco/js-sdk').default;

const amityConfig = {
    apiKey: 'b0e8e95f3ed2f16119348814015d15de8200dfb4e93c3b24',
    apiRegion: 'SG',
};

const client = new AmityClient(amityConfig);

const createChannel = async () => {
    const data = {
        name: 'my_channel',
        type: 'STANDARD',
        isPublic: true,
    };

    try {
        const response = await client.channel.createChannel(data);
        console.log('Channel created:', response);

        // Send channel to dashboard
        const channelRepository = client.channel.getChannelRepository();
        const dashboardResponse = await channelRepository.sendToDashboard(response.channelId);
        console.log('Channel sent to dashboard:', dashboardResponse);
    } catch (error) {
        console.error('Error creating channel:', error);
    }
};

createChannel();
