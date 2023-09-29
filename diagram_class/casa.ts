class Endereco {}

class Acabamento {}

class TipoTelha {}

class TipoVidro {}

class Moradia {
    Area(): number {
        return 0;
    }
    Endereco(): Endereco {
        return new Endereco();
    }
}

class Parede {
    Altura(): number {
        return 0;
    }
    Largura(): number {
        return 0;
    }
    Acabamento(): Acabamento {
        return new Acabamento();
    }
}

class Telhado {
    TipoTelha(): TipoTelha {
        return new TipoTelha();
    }
    Area(): number {
        return 0;
    }
}

class Espelho {
    TipoVidro(): TipoVidro {
        return new TipoVidro();
    }
    Altura(): number {
        return 0;
    }
    Largura(): number {
        return 0;
    }
}

class Casa extends Moradia {
    TelhadoAreaExterna(): Telhado {
        return new Telhado();
    }
    TelhadoAreaInterna(): Telhado {
        return new Telhado();
    }
    ParedeQuarto(): Parede {
        return new Parede();
    }
    ParedeBanheiro(): Parede {
        return new Parede();
    }
    ParedeCozinha(): Parede {
        return new Parede();
    }
    EspelhoCorredor(): Espelho {
        return new Espelho();
    }
}