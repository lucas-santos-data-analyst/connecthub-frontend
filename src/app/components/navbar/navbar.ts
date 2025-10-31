import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() toggleSidebarEvent = new EventEmitter<void>();

  searchTerm: string = '';
  hasUnreadNotifications: boolean = true;
  unreadCount: number = 3;
  userPhoto: string = 'assets/images/user-photo.jpg';
  userName: string = 'Betty Hermann';

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      console.log('Buscando:', this.searchTerm);
    }
  }

  onCodeSearch() {
    console.log('Busca por código');
  }

  openNotifications() {
    console.log('Abrir notificações');
  }

  toggleUserMenu() {
    console.log('Abrir menu do usuário');
  }
}
