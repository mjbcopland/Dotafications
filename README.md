## Usage

1. [Get Pushbullet](https://www.pushbullet.com/apps)

1. Get your API key

    Click [here](https://www.pushbullet.com/#settings/account) to create an access token.

2. Copy this token into `config.json` like so:

    ```
    {
      "key": "YOUR-API-KEY"
    }
    ```

3. Copy `gamestate_integration_dota2-gsi.cfg.` to folder `steamapps\common\dota 2 beta\game\dota\cfg\gamestate_integration\` (you may have to create this folder)

4. Run `node index.js` and Dota 2.