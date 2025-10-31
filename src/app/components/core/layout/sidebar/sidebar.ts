import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface PageInfo {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  @Input() isOpen: boolean = true;

  currentPageName: string = 'Home';
  currentIcon: string = 'ph-house';

  // Mapeamento de rotas para páginas
  private routeMap: { [key: string]: PageInfo } = {
    '/home': { name: 'Home', icon: 'ph-house' },
    '/discussoes': { name: 'Discussões', icon: 'ph-chats-circle' },
    '/projetos': { name: 'Projetos Acadêmicos', icon: 'ph-books' },
    '/eventos': { name: 'Eventos Acadêmicos', icon: 'ph-calendar-blank' },
    '/usuarios': { name: 'Usuários', icon: 'ph-users' },
    '/parametros': { name: 'Parâmetros de Sistema', icon: 'ph-gear' },
    '/financeiro': { name: 'Financeiro & Faturamento', icon: 'ph-wallet' },
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Define página inicial baseada na URL atual
    this.updateCurrentPage(this.router.url);

    // Escuta mudanças de rota
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCurrentPage(event.urlAfterRedirects);
      });
  }

  private updateCurrentPage(url: string) {
    // Remove query params e fragments
    const cleanUrl = url.split('?')[0].split('#')[0];

    const pageInfo = this.routeMap[cleanUrl];
    if (pageInfo) {
      this.currentPageName = pageInfo.name;
      this.currentIcon = pageInfo.icon;
    } else {
      // Fallback se a rota não estiver mapeada
      this.currentPageName = 'Home';
      this.currentIcon = 'ph-house';
    }
  }
}
