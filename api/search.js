export default async function handler(req, res) {
    const { query } = req.body;

    const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            api_key: process.env.TAVILY_API_KEY,
            query: query,
            max_results: 10
        })
    });

    const data = await response.json();
    res.status(200).json(data);
}