package com.devpro.mseasydiet.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class PaginacaoUtils {

    public static Pageable instanciaPageable(int page, int size, String sort) {
        Sort.Order order = Sort.Order.by(sort);
        Sort sortConfig = Sort.by(order);
        Pageable pageable = PageRequest.of(page, size, sortConfig);
        return pageable;
    }
}
