function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
}

Animacao.prototype = {
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },

    desligar: function() {
        this.ligado = false;
    },

    novoSprite: function(sprite) {
        this.sprites.push(sprite);
    },

    proximoFrame: function() {
        if (! this.ligado) {
            return;
        }

        this.limparTela();
        this.sprites.forEach(sprite => sprite.atualizar());
        this.sprites.forEach(sprite => sprite.desenhar());

        requestAnimationFrame(() => {
            this.proximoFrame();
        });
    },

    limparTela: function() {
        const canvas = this.context.canvas;
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }
}