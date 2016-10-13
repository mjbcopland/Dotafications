## Usage

1. [Get Pushbullet](https://www.pushbullet.com/apps)

1. Authorise on Pushbullet

    Click [here](https://www.pushbullet.com/authorize?client_id=b8MieHXFVldQwv3ipi1ec8umcwXVRU2F&redirect_uri=https%3A%2F%2Fwww.pushbullet.com%2Flogin-success&response_type=token&scope=everything) to authorise with Pushbullet. You will be redirected to `pushbullet.com/login-success#access_token=YOUR-ACCESS-TOKEN`.

2. Copy this token into `config.json` like so:

    ```
    {
      "key": "YOUR-ACCESS-TOKEN"
    }
    ```

3. Copy `gamestate_integration_dota2-gsi.cfg.` to folder `steamapps\common\dota 2 beta\game\dota\cfg\gamestate_integration\` (you may have to create this folder)

4. Run `node index.js` and Dota 2.