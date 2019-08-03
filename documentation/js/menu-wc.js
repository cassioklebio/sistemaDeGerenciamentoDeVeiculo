'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sistema-de-gerenciamento-de-veiculo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0d01686d704180783bbb83e0c54bf450"' : 'data-target="#xs-components-links-module-AppModule-0d01686d704180783bbb83e0c54bf450"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0d01686d704180783bbb83e0c54bf450"' :
                                            'id="xs-components-links-module-AppModule-0d01686d704180783bbb83e0c54bf450"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-c82654c78d09a8a67caabcdde0b852cf"' : 'data-target="#xs-components-links-module-CoreModule-c82654c78d09a8a67caabcdde0b852cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-c82654c78d09a8a67caabcdde0b852cf"' :
                                            'id="xs-components-links-module-CoreModule-c82654c78d09a8a67caabcdde0b852cf"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModulesModule.html" data-type="entity-link">ModulesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OwnerModule.html" data-type="entity-link">OwnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OwnerModule-391c2e84a3ea7bb005a9155386dea7c6"' : 'data-target="#xs-components-links-module-OwnerModule-391c2e84a3ea7bb005a9155386dea7c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OwnerModule-391c2e84a3ea7bb005a9155386dea7c6"' :
                                            'id="xs-components-links-module-OwnerModule-391c2e84a3ea7bb005a9155386dea7c6"' }>
                                            <li class="link">
                                                <a href="components/OwnerRegistrarionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OwnerRegistrarionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OwnerRoutingModule.html" data-type="entity-link">OwnerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link">PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-9dbfb6cc4dc04b8b6d6b862cc05d55d7"' : 'data-target="#xs-components-links-module-PublicModule-9dbfb6cc4dc04b8b6d6b862cc05d55d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-9dbfb6cc4dc04b8b6d6b862cc05d55d7"' :
                                            'id="xs-components-links-module-PublicModule-9dbfb6cc4dc04b8b6d6b862cc05d55d7"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublicHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublicHomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link">PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TicketModule.html" data-type="entity-link">TicketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TicketModule-bbf0e1f359cc22dca475d3389e7e9cb3"' : 'data-target="#xs-components-links-module-TicketModule-bbf0e1f359cc22dca475d3389e7e9cb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TicketModule-bbf0e1f359cc22dca475d3389e7e9cb3"' :
                                            'id="xs-components-links-module-TicketModule-bbf0e1f359cc22dca475d3389e7e9cb3"' }>
                                            <li class="link">
                                                <a href="components/TicketListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketRegistrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketRegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TicketSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicketRoutingModule.html" data-type="entity-link">TicketRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VehicleModule.html" data-type="entity-link">VehicleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' : 'data-target="#xs-components-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' :
                                            'id="xs-components-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' }>
                                            <li class="link">
                                                <a href="components/VehicleFormCompletComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VehicleFormCompletComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleFormSimpleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VehicleFormSimpleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VehicleHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VehicleListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VehicleListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' : 'data-target="#xs-injectables-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' :
                                        'id="xs-injectables-links-module-VehicleModule-f57a080d3de4bd2ce73563249f4c64fd"' }>
                                        <li class="link">
                                            <a href="injectables/VehicleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VehicleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VehicleRoutingModule.html" data-type="entity-link">VehicleRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link">TicketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/TableTicket.html" data-type="entity-link">TableTicket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link">Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vehicle.html" data-type="entity-link">Vehicle</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});